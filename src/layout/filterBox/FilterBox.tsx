import Styled from "./FilterBox.style";

type Props = {
  filter: (str: string) => void;
};

const FilterBox = ({ filter }: Props) => {
  return (
    <Styled.FilterBox>
      Search tasks:
      <Styled.FilterInput
        placeholder="Filter"
        onChange={(e) => {
          filter(e.target.value);
        }}
      />
    </Styled.FilterBox>
  );
};

export default FilterBox;
