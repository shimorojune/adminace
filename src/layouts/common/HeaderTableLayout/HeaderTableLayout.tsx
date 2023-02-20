/** @jsxImportSource @emotion/react */
import { Icon } from "@iconify/react";
import { Button, IconButton } from "@mui/material";
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
  const exportToCSVButtonTitleString = useTranslatedString({
    i8nKey: "I18N_EXPORT_TO_CSV",
  });

  // DRAW
  return (
    <div css={styles.layoutHeaderContainer}>
      <span>{layoutHeaderTitleString}</span>
      <div css={styles.layoutHeaderButtonsContainer}>
        <Button
          startIcon={<Icon icon="file-icons:microsoft-excel" />}
          variant="outlined"
          size="medium"
        >
          {exportToCSVButtonTitleString}
        </Button>
        <Button
          startIcon={<Icon icon="material-symbols:add" />}
          variant="contained"
          size="medium"
        >
          {createButtonTitleString}
        </Button>
      </div>
    </div>
  );
};

export const HeaderTableLayout = (props: HeaderTableLayoutProps) => {
  // PROPS
  const { createButtonProps, title } = props;

  // COMPONENT PROPS
  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: useTranslatedString({ i8nKey: "I18N_SNACK_NAME" }),
      minWidth: 100,
      flex: 5,
    },
    {
      field: "lastName",
      headerName: useTranslatedString({ i8nKey: "I18N_TYPE" }),
      minWidth: 100,
      flex: 1,
    },
    {
      field: "id",
      headerName: useTranslatedString({ i8nKey: "I18N_STOCK_QUANTITY" }),
      flex: 1,
      minWidth: 100,
    },
    {
      field: "age",
      headerName: useTranslatedString({ i8nKey: "I18N_ACTIONS" }),
      minWidth: 100,
      flex: 0,
      renderCell: () => {
        // DRAW
        return (
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            color="secondary"
            size="small"
          >
            Edit
          </Button>
          // <IconButton
          //   onClick={(e) => {
          //     e.stopPropagation();
          //   }}
          //   size="small"
          // >
          //   <Icon icon="material-symbols:edit" />
          // </IconButton>
        );
      },
    },
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
