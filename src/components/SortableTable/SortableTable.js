import { sortBy, map } from "lodash";
import React, { useState } from "react";
import { Table } from "semantic-ui-react";

function SortableTable({tableData}) {
  const [column, setColumn] = useState(null);
  const [data, setData] = useState(tableData);
  const [direction, setDirection] = useState(null);

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

  console.log("DATA", data);
  return (
    <Table sortable celled fixed compact unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={handleSort("name")}
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
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>{height}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default SortableTable;
