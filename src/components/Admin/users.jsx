import { Table } from "react-bootstrap";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import styles from "@/styles/admin/users.module.scss";

const Users = () => {
  return (
    <>
      <div className={styles.professional_table}>
        <div className={styles.head_wrapper}>
          <h3 className="gp-color-grey">Users List</h3>
          <div
            className="d-flex align-items-center justify-content-between"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add Parent Category"
          >
            <label className="me-3 j-grey-text">Add User</label>
            <span>
              <a className="add-anchor">+</a>
            </span>
          </div>
        </div>

        <div className={styles.main_table}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th width="50px">Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width={20}>{1}</td>
                <td>Admin User</td>
                <td>Admin User</td>
                <td>
                  <FaPen className="me-4 gp-cursor-pointer" fontSize={20} />
                  <FaTrashAlt className="gp-cursor-pointer" fontSize={20} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export { Users };
