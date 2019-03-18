import React, { Component } from 'react'
import { ProjectCard } from './ProjectCard';
import { MainHeader } from './Header';

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <MainHeader />
        <ProjectCard />
      </div>
    )
  }
}
