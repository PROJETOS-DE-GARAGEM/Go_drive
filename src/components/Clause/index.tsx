import { Text } from "react-native";

import styles from "./style";

type ClauseProps = {
  data: {
    id: number;
    term: string;
  };
};

const ListClause = ({ data }: ClauseProps) => {
  return (
    <Text style={styles.textTerm}>
      <Text style={styles.topicItem}>{data.id}. </Text>
      {data.term}
    </Text>
  );
};

export { ListClause };
