export const goToHomePage = navigate => {
  navigate('/')
}

export const goDetailPage = (navigate, id) => {
  navigate(`/datails/${id}`)
}
