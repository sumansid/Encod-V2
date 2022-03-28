import React from "react";
import Downshift from "downshift";
import Link from "next/link";

const AutoComplete = ({ items, access_token, onChange, itemToString }) => {
  console.log(typeof items);
  return (
    <Downshift
      onChange={onChange}
      itemToString={itemToString}
      id="autocomplete"
      labelId="autocomplete-label"
      inputId="autocomplete-input"
      menuId="autocomplete-menu"
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <div className="bg-gray-100 rounded-lg flex flex-col justify-center  ">
          <label
            className="font-semibold block py-2 flex justify-center"
            {...getLabelProps()}
          >
            Choose your repository
          </label>
          <div
            style={{ display: "inline-block" }}
            {...getRootProps({}, { suppressRefError: true })}
          >
            <input
              className=" border-2 border-black
              h-10
              bg-white
              flex
              justify-center
              block
 my-5
              border
              border-gray-200
              rounded
            "
              {...getInputProps()}
            />
          </div>
          <div className="bg-gray-100 overflow-y-scroll h-full flex flex-col ">
            <ul className="overflow-y-scroll" {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(
                      (item) =>
                        !inputValue || itemToString(item).includes(inputValue)
                    )
                    .map((item, index) => (
                      <Link
                        key={item.name}
                        href={{
                          pathname: `/repo/${item.owner.login}/${item.name}`,
                          query: {
                            repo_name: item.name,
                            access_token: access_token,
                            owner: item.owner,
                            tree_url: item.trees_url,
                          },
                        }}
                      >
                        <li
                          className="px-6 py-2 flex border-b border-gray-200  rounded-lg"
                          {...getItemProps({
                            key: itemToString(item),
                            index,
                            item,

                            style: {
                              backgroundColor:
                                highlightedIndex === index ? "gray" : "white",
                              fontWeight:
                                selectedItem === item ? "bold" : "normal",
                            },
                          })}
                        >
                          {itemToString(item)}
                        </li>
                      </Link>
                    ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default AutoComplete;
