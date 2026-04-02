import { useApp } from "../context/AppContext";
import { useState } from "react";

const Transactions = () => {
  const {
    list,
    search,
    setSearch,
    role,
    deleteItem,
    updateItem,
    addItem,
  } = useApp();

  const [sort, setSort] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  let filtered = list.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  if (typeFilter !== "all") {
    filtered = filtered.filter((t) => t.type === typeFilter);
  }

  if (sort) {
    filtered = [...filtered].sort((a, b) => b.amount - a.amount);
  }

  const startEdit = (item) => {
    setEditId(item.id);
    setEditData(item);
  };

  const saveEdit = () => {
    updateItem(editData);
    setEditId(null);
  };

  return (
    <div className="section">
      <h3>Transactions</h3>
      <div className="controls">
        <input
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button onClick={() => setSort(!sort)}>Sort</button>

        {role === "admin" && (
          <button onClick={addItem}>+ Add</button>
        )}
      </div>

      {/* TABLE */}
      {filtered.length === 0 ? (
        <p className="empty">No transactions found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>

                <td
                  className={
                    t.type === "income"
                      ? "amount-income"
                      : "amount-expense"
                  }
                >
                  ₹ {t.amount}
                </td>

                {editId === t.id ? (
                  <>
                    <td>
                      <input
                        value={editData.category}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            category: e.target.value,
                          })
                        }
                      />
                    </td>

                    <td>
                      <select
                        value={editData.type}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </select>
                    </td>

                    <td>
                      <button onClick={saveEdit} className="action-btn">
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="action-btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{t.category}</td>
                    <td>{t.type}</td>

                    {role === "admin" && (
                      <td>
                        <button
                          onClick={() => startEdit(t)}
                          className="action-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteItem(t.id)}
                          className="action-btn"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transactions;