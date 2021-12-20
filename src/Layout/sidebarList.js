import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import DirectionsIcon from '@material-ui/icons/InfoOutlined';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';


//Material UI's ListItemLink
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem 
        button 
        component={renderLink} 
        >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainList = (
  <div>
    <List aria-label="main mailbox folders">
      
      <ListItemLink to="home" primary="Home" icon={<HomeIcon />} />
      <ListItemLink to="form" primary="Form" icon={<FormIcon />} />
      <ListItemLink to="instruction" primary="Instruction" icon={<DirectionsIcon />} />
    </List>
  </div>
);
