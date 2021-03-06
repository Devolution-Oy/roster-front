import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { projects } from '../../test_data/index.js';
import ProjectContainer from './ProjectContainer.js';
import Firebase, { FirebaseContext } from '../Firebase/index.js';

jest.mock('../Firebase/firebase');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('ProjectContainer', () => {
  it('Renders header and project view for each project', () => {
    act(() => {
      render(
        <FirebaseContext.Provider value={new Firebase()}>
          <ProjectContainer projects={projects} />
        </FirebaseContext.Provider>
        , container
      );
    });
    expect(container.querySelector('.project_container')).toBeTruthy();
    expect(container.querySelector('.user_projects')).toBeTruthy();
    expect(document.getElementById('project_view_project1')).toBeTruthy();
    expect(document.getElementById('project_view_project2')).toBeTruthy();
    expect(document.getElementById('project_view_project3')).toBeTruthy();
  });
});