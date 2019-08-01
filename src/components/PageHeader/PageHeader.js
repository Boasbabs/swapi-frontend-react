import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Header, Icon } from "semantic-ui-react";

const PageHeader = ({title, icon, subtitle}) => (
  <Fragment>
    <Header
      icon
      size="large"
      color="yellow"
      style={{ fontWeight: "400", fontSize: "40px" }}
    >
      <Icon name={icon} />
      {title}
      <Header.Subheader style={{ color: "#fff" }}>
        {subtitle}
      </Header.Subheader>
    </Header>
  </Fragment>
);

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default PageHeader;
