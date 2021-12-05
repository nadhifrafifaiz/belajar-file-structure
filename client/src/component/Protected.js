const Protected = ({ children, permissions = ["finance", "product"] }) => {
  if (!permissions.include(auth.permssions)) {
    return <Redirect />; // or 404
  }

  return <>{children}</>;
};
