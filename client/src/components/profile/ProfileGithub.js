import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2> {/*  TU TRZEBA NAPRAWIC BO NIE O TO MI CHODZI  */}
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repoArr) => (repoArr.map(repo => (
          <div key={repo.id} className='repo bg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className='badge badge-primary'>
                  Stars: {repo.stargazers_count}
                </li>
                <li className='badge badge-primary'>
                  Watchers: {repo.watchers_count}
                  {console.log(repo.html_url)}
                </li>
                <li className='badge badge-primary'>
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>)
        ))
        ))}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);