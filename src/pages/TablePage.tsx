import Filter from "../components/Filter";
import TableContent from "../components/TableContent";

function TablePage() {
  return (
    <div className="table">
      <div className="table-header">
        <Filter />
      </div>
      <div className="table-content">
        <TableContent />
      </div>
    </div>
  );
}

export default TablePage;
