import Project from '../project';

const projects = [
  {
    name: 'First project',
    summary: 'This is the first test project',
    todo: ['Add styles', 'Submit for review'],
  },
  {
    name: 'Second Test project',
    summary: 'This is a second project',
    todo: [],
  },
];

const testProjects = new Project(projects[0].name, projects[0].summary);

test('return the first project', () => {
  expect(testProjects).not.toBe(null);
});

test('return first project as name', () => {
  expect(testProjects.name).toBe('First project');
});

test('return summary of first project', () => {
  expect(testProjects.summary).toBe('This is the first test project');
});
