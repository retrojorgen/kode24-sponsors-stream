import makeRequest from "./helpers";

async function getSponsors() {
  const response = await makeRequest("sponsors", "");
  if (response.success) {
    let sponsors = [
      ...response.response.silver.map((sponsor) => ({
        ...sponsor,
        ...{ type: "silver" },
      })),
      ...response.response.gold.map((sponsor) => ({
        ...sponsor,
        ...{ type: "gold" },
      })),
    ];
    return sponsors;
  }

  return false;
}
export default getSponsors;
