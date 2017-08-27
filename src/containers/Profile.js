import React, { Component } from 'react'
import { Container, Name, GameList, GameListHeader, GameRecord, Column, ColumnLabels } from '../styled/Profile'
import Relay from 'react-relay'


class Profile extends Component {

  get records() {
    return this.props.viewer.user.p1games.edges.map( (edge, index) => {
      // rename node as game
      let { node: game } = edge

      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? "Won!" : "Lost..."}
          </Column>
          <Column>
            {game.p1Guess}
          </Column>
          <Column>
            {(game.p1GuessCorrect) ? "Yes" : "Nope"}
          </Column>
          <Column>
            {new Date(game.createdAt).toLocaleDateString()}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {

    let {email} = this.props.viewer.user

    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Relay.createContainer(
  Profile, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
            email
            p1games (first: 10) {
              edges {
                node {
                  id
                  createdAt
                  winner {
                    id
                  }
                  p1Guess
                  p1GuessCorrect
                }
              }
            }
          }
        }
      `,
    }
  }
)
