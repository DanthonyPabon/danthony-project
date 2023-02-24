/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Filter an array of objects based on a search string and a property to be searched.
 * @param arrayToFilter - The array to be filtered.
 * @param searchedText - The search string.
 * @param propertyToBeSearched - The property to be searched in each object.
 * @returns A new array containing objects that match the search string in the specified property.
 */
export function filterArrayBy(
  arrayToFilter: any[],
  searchedText: string,
  propertyToBeSearched: string
) {
  const newData = arrayToFilter.filter(function (item: any) {
    const propertyValue = item[propertyToBeSearched];
    const itemData = Array.isArray(propertyValue)
      ? propertyValue.map((v: string) => v.toUpperCase())
      : propertyValue.toUpperCase();
    const textData = searchedText.toUpperCase();
    return itemData.includes(textData);
  });
  return newData;
}

const FunctionUtils = {
  filterArrayBy,
};

export default FunctionUtils;
