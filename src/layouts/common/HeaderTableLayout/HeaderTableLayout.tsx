import { Icon } from "@iconify/react";
import { AppBar, Button, Drawer, Portal, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
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

interface CreateObjectDrawerProps {
  isOpen: boolean;
  toggle: () => void;
}

interface CreateObjectForm {
  objectName: string;
  objectType: string;
  objectQuantity: string;
  objectPrice: string;
}

const CreateObjectDrawer = (props: CreateObjectDrawerProps) => {
  // PROPS
  const { isOpen, toggle } = props;

  // HOOKS
  const formInstance = useForm<CreateObjectForm>({
    defaultValues: {
      objectName: "",
      objectType: "",
      objectQuantity: "0",
      objectPrice: "0",
    },
  });

  // DRAW
  return (
    <Drawer variant="temporary" anchor="right" open={isOpen} onClose={toggle}>
      <div css={styles.container.createObjectDrawerContainer.style}>
        <div css={styles.container.createObjectDrawerContainer.drawerHeader}>
          {useTranslatedString({ i8nKey: "I18N_ADD_SNACK" })}
        </div>
        <div css={styles.container.createObjectDrawerContainer.drawerContent}>
          <TextField
            id="filled-basic"
            fullWidth
            autoFocus
            label={useTranslatedString({ i8nKey: "I18N_SNACK_NAME" })}
            variant="filled"
          />
        </div>
        <div css={styles.container.createObjectDrawerContainer.drawerFooter}>
          <Button variant="outlined" color="error">
            {useTranslatedString({ i8nKey: "I18N_CANCEL" })}
          </Button>
          <Button variant="contained">
            {useTranslatedString({ i8nKey: "I18N_SAVE" })}
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

const LayoutHeader = (props: LayoutHeaderProps) => {
  // PROPS
  const { createButtonProps, title } = props;

  // STATE
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  // VARIABLES
  const layoutHeaderTitleString = useTranslatedString(title);
  const createButtonTitleString = useTranslatedString(createButtonProps.title);
  const exportToCSVButtonTitleString = useTranslatedString({
    i8nKey: "I18N_EXPORT_TO_CSV",
  });

  // HANDLERS
  const toggleCreateDrawer = () => {
    setIsCreateDrawerOpen((state) => !state);
  };

  // DRAW
  return (
    <div css={styles.container.layoutHeaderContainer.style}>
      <span>{layoutHeaderTitleString}</span>
      <div css={styles.container.layoutHeaderContainer.buttonsContainer.style}>
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
          onClick={toggleCreateDrawer}
        >
          {createButtonTitleString}
        </Button>
      </div>
      <CreateObjectDrawer
        isOpen={isCreateDrawerOpen}
        toggle={toggleCreateDrawer}
      />
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
    <div css={styles.container.style}>
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
