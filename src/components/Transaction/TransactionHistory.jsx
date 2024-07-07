import style from'../Transaction/transactionStyle.module.css';

const TransactionHistory = ( {items} ) => {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.titleTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tablesInformation}>
          {items.map((item) => (
            <tr key = {item.id}>
              <td className={style.item}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

