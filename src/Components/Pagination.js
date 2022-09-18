import './UI/Paginatoin.css';

const Pagination = (props) => {
  return (
    <div className="btn_box">
      <div className="prev">
        {props.resultData && (
          <button>
            <a
              href={props.resultData.previous}
              onClick={(e) => {
                e.preventDefault();
                props.updateResult(e.target.getAttribute("href"));
              }}
            >
              Previous
            </a>
          </button>
        )}
      </div>
      <div className="next">
        {props.resultData && (
          <button>
            <a
              href={props.resultData.next}
              onClick={(e) => {
                e.preventDefault();
                props.updateResult(e.target.getAttribute("href"));
              }}
            >
              Next
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
