import React, { useState, useEffect } from "react";
import { sortBy, map } from "lodash";
import { Table, Icon } from "semantic-ui-react";

function convertToNumber(x) {
  if (isNaN(x)) {
    return 0;
  }
  return Number(x);
}

function convertCmToInches(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return Number.parseFloat(x / 2.54).toFixed(2);
}

function convertCmToFeet(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return Math.floor(x / 30.48);
}

function SortableTable({ tableData }) {
  const [column, setColumn] = useState(null);
  const [data, setData] = useState(tableData);
  const [characterLength, setCharacterLength] = useState(0);
  const [direction, setDirection] = useState(null);
  const [heightInCm, setHeightInCm] = useState(0);
  const [heightInInches, setHeightInInches] = useState(0);
  const [heightInFeet, setHeightInFeet] = useState(0);

  const handleSort = clickedColumn => () => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setData(sortBy(data, [clickedColumn]));
      setDirection("ascending");

      return;
    }
    setData(data.reverse());
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  useEffect(() => {
    async function handleTotalHeight() {
      const hInCm = map(data, ({ height }) => convertToNumber(height)).reduce(
        (sum, cur) => {
          return sum + cur;
        }
      );
      setHeightInCm(hInCm);
      setCharacterLength(data.length)
      setHeightInFeet(convertCmToFeet(hInCm));
      setHeightInInches(convertCmToInches(hInCm));
    }
    handleTotalHeight();
  }, []);


  return (
    <Table sortable celled fixed compact unstackable color="yellow">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={handleSort("name")}
            width={8}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "gender" ? direction : null}
            onClick={handleSort("gender")}
          >
            Gender
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "height" ? direction : null}
            onClick={handleSort("height")}
          >
            Height
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(data, ({ height, gender, name }) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>
              {gender === "male" ? (
                <Icon color="blue" name="mars" />
              ) : gender === "female" ? (
                <Icon color="pink" name="venus" />
              ) : (
                gender
              )}
            </Table.Cell>
            <Table.Cell>{height}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>Total Characters: {characterLength}</Table.HeaderCell>
          <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          <Table.HeaderCell>
            <strong>
              {`${heightInCm} cm (${heightInFeet}ft / ${heightInInches}in)`}{" "}
            </strong>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default SortableTable;
