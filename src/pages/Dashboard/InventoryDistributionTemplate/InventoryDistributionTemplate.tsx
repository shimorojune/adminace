import {
  BottomTabsLayout,
  BottomTabsLayoutProps,
} from "layouts/common/BottomTabsLayout/BottomTabsLayout";
import { DistributionTabContent } from "./components/DistributionTabContent/DistributionTabContent";
import { InventoryTabContent } from "./components/InventoryTabContent/InventoryTabContent";
import styles from "./InventoryDistributionTemplate.styles";

export const InventoryDistributionTemplate = () => {
  // COMPONENT PROPS
  const tabConfig: BottomTabsLayoutProps["tabs"] = [
    {
      title: {
        i8nKey: "I18N_INVENTORY",
      },
      content: <InventoryTabContent />,
    },
    {
      title: {
        i8nKey: "I18N_DISTRIBUTION",
      },
      content: <DistributionTabContent />,
    },
  ];

  // DRAW
  return (
    <div css={styles.container.style}>
      <BottomTabsLayout tabs={tabConfig} />
    </div>
  );
};
