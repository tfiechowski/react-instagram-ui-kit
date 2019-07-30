import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  overflow: hidden;
  margin-bottom: 48px;

  display: flex;
`;

const AvatarWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 150px;
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100vmax;
  }
`;

function Avatar({ src }) {
  return (
    <AvatarWrapper>
      <div>
        <img src={src} />
      </div>
    </AvatarWrapper>
  );
}

const FollowersWrapper = styled.div`
  flex: 2;

  display: flex;
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 400;

  ul {
    flex: 1;
    display: flex;
    flex-direction: row;

    li {
      margin-right: 40px;
    }
  }
`;

const Number = styled.span`
  font-weight: bold;
`;

function Followers({ followersData }) {
  const [posts, followers, following] = followersData;

  return (
    <FollowersWrapper>
      <ul>
        <li>
          Posty: <Number>{posts}</Number>
        </li>
        <li>
          <Number>{followers}</Number> followers
        </li>
        <li>
          Following: <Number>{following}</Number>
        </li>
      </ul>
    </FollowersWrapper>
  );
}

const UserWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 28px;
  line-height: 32px;

  h4 {
    margin: 0;
    font-weight: 300;
  }
`;

function Username({ children }) {
  return (
    <UserWrapper>
      <h4>{children}</h4>
    </UserWrapper>
  );
}

const Fullname = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Social = styled.div`
  flex: 2;
`;

export default function Profile({
  avatarSrc,
  username,
  fullName,
  followersData,
  children,
  ...props
}) {
  return (
    <Wrapper {...props} avatarSrc>
      <Avatar src={avatarSrc} />
      <Social>
        <Username>{username}</Username>
        <Followers followersData={followersData} />
        <Fullname>Tomek Fiechowski</Fullname>
      </Social>
    </Wrapper>
  );
}

Profile.propTypes = {
  /**
   * Specifies if the grid is empty
   */
  isEmpty: PropTypes.bool,

  /**
   * When `true`, images are displayed with 100% width
   */
  feed: PropTypes.bool
};

Profile.defaultProps = {
  followersData: [0, 0, 0]
};
