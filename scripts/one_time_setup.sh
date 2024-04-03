echo $GITHUB_REPOSITORY
echo $GITHUB_REF_NAME
SANITIZED_GITHUB_REF_NAME=$(echo $GITHUB_REF_NAME | sed 's./.-.g')
echo $SANITIZED_GITHUB_REF_NAME

# weird method because of how vercel gets the name of the folder as the project name
ORIGINAL_DIR=$(pwd)
PROJECT_NAME=$(basename $ORIGINAL_DIR)-$SANITIZED_GITHUB_REF_NAME
echo $PROJECT_NAME
mkdir $PROJECT_NAME
cp -r * $PROJECT_NAME
cd $PROJECT_NAME

vercel link --yes --token=$VERCEL_TOKEN --scope=$GH_VERCEL_ORG_ID
VERCEL_PROJECT_ID=$(jq -r '.projectId' .vercel/project.json)
echo $VERCEL_PROJECT_ID

# end weird method
cd $ORIGINAL_DIR

echo "Add VERCEL_PROJECT_ID: $VERCEL_PROJECT_ID To Vercel KV"
curl_output=$(curl "$VERCEL_KV_ENDPOINT/set/$SANITIZED_GITHUB_REF_NAME/$VERCEL_PROJECT_ID" -H "Authorization: Bearer $VERCEL_KV_AUTHORIZATION_KEY")
echo "$curl_output"
if [[ $curl_output == *"OK"* ]]; then
  echo "Successfully added $VERCEL_PROJECT_ID to KV!"
  exit 0
else
  echo "Error, unable to add $VERCEL_PROJECT_ID to KV!"
  exit 1
fi
