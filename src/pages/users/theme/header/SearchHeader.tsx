import React from "react";

import { Input, Space } from "antd";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const Inputheader = () => {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Bạn cần tìm gì..."
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Space>
    </div>
  );
};

export default Inputheader;
