type ResponseData = {
  name: string;
  label: string;
  stepInfo: string;
  dataFields: {
    errorCategory: string;
    concept: string;
  }[];
  dataFieldValues: {
    errorCategory: string;
    concept: string;
  }[];
  errorCategories: string[];
  axiomsMapping: string[];
  queryObjectMaping: string[];
};

type ParsedData = {
  name: string;
  label: string;
  info: string;
  errorCategory: {
    field: string;
    value: string;
    options: string[];
  };
  concept: {
    field: string;
    value: string;
  };
};

type ResultData = {
  [x: string]: {
    concept: string;
    errorCategory: string;
  };
};

type DropdownOptions = {
  label: string;
  value: string;
};
