import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 12px 64px;
`
const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2){
        border-top:1px solid #D9DBDE;
    }
`

export class List extends React.Component {
    render() {
        const { langs } = this.props;
        return (
            <Container>
                {
                    langs.map((lang, index) => {
                        return <ListItem key={index}>{lang}</ListItem>
                    })
                }
            </Container>
        )
    }
}