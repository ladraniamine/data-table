import "./App.css";
import TableComponent from "./challenge/TableComponent";
import { SearchOutlined } from "@mui/icons-material";

function App() {
  return (
    <>
      <div
        style={{
          height: "150px",
          borderRadius: "15px",
          border: "1px solid rgb(240, 240, 240)",
          boxShadow: "0px 0px 44px -5px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid rgb(240, 240, 240)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "40px",
              padding: "0px 10px",
              flex: "1",
            }}
          >
            <SearchOutlined sx={{ color: "rgb(202, 202, 202)" }} />
            <input
              type="text"
              placeholder="search..."
              style={{ all: "unset" }}
            />
          </div>
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid rgb(240, 240, 240)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "40px",
              padding: "0px 10px",
              flex: "1",
            }}
          >
            <SearchOutlined sx={{ color: "rgb(202, 202, 202)" }} />
            <input
              type="text"
              placeholder="search..."
              style={{ all: "unset" }}
            />
          </div>
        </div>
      </div>
      <TableComponent />
    </>
  );
}

export default App;
