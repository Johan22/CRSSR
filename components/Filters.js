
// const Filters = (props) => (

class Filters extends React.Component {
  constructor(props) {
    super(props);
    console.log('filters');
    console.log(props);
  }

  render() {
    return (
      <div className="filters">

        {this.props.filters.map((filter) => (
          <div className="filter-container">
            <div>{filter.name}</div>

            {filter.options && filter.options.length > 0 && filter.options.map((option) => (
              <div>{option && option.label}</div>
            ))}
          </div>

        ))}

        <style jsx>{`
          .filters {
            width: 260px;
            padding-bottom: 20px;
            position: fixed;
            top: 75px;
            left: 0;
            bottom: 0;
            background-color: #f0f0f0;
            overflow-y: scroll;
            z-index: 100001;
            font-size: 16px;

            .filter-container {
              padding: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Filters
