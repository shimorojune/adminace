/** @jsxImportSource @emotion/react */
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { I8nAndMessageProps } from "types/commonTypes";
import { useTranslatedString } from "utils/hooks/useTranslatedString";
import styles from "./HeaderTableLayout.styles";

interface HeaderTableLayoutProps {
  title: I8nAndMessageProps;
  createButtonProps: {
    title: I8nAndMessageProps;
    onClick: () => null;
  };
}

type LayoutHeaderProps = Pick<
  HeaderTableLayoutProps,
  "createButtonProps" | "title"
>;

const LayoutHeader = (props: LayoutHeaderProps) => {
  // PROPS
  const { createButtonProps, title } = props;

  // VARIABLES
  const layoutHeaderTitleString = useTranslatedString(title);
  const createButtonTitleString = useTranslatedString(createButtonProps.title);

  // DRAW
  return (
    <div css={styles.layoutHeaderContainer}>
      <span>{layoutHeaderTitleString}</span>
      <Button
        startIcon={<Icon icon="material-symbols:add" />}
        variant="contained"
        size="medium"
      >
        {createButtonTitleString}
      </Button>
    </div>
  );
};

export const HeaderTableLayout = (props: HeaderTableLayoutProps) => {
  // PROPS
  const { createButtonProps, title } = props;

  // COMPONENT PROPS
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  // DRAW
  return (
    <div css={styles.container}>
      <LayoutHeader createButtonProps={createButtonProps} title={title} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
};
