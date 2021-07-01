export function save(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjects() {
  const projects = localStorage.getItem('projects');

  return projects && JSON.parse(projects);
}
