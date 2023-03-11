export default async function fetchData() {
  const resp = await fetch(`${process.env.BASE_URL}/api/data`, {
    cache: 'no-store',
  });

  const respData: ResponseData[] = await resp.json();

  // parsing data to use it for front-end
  const parsedData = respData.map((item) => {
    return {
      name: item.name,
      label: item.label,
      info: item.stepInfo,
      errorCategory: {
        field: 'errorCategory',
        value: item.dataFieldValues[0].errorCategory,
        options: item.errorCategories,
      },
      concept: {
        field: 'concept',
        value: item.dataFieldValues[0].concept,
      },
    };
  });

  return parsedData;
}
