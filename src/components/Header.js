import PropTypes from "prop-types";

const Header = ({ title }) => { // Used destructuting for props.title (<any>.title)
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker', // If props have no value this will be the default title
}

Header.propTypes = {
  title: PropTypes.string.isRequired, // This ensures the prop is a string and required
}

export default Header;
