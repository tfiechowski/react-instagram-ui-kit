import styled from "@emotion/styled";
import { safeHtml } from "common-tags";
import PropTypes from "prop-types";
import React from "react";
import { fontFamily, textColor } from "../../utils/cssConfig";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  font-family: ${fontFamily};
  color: ${textColor};

  overflow: hidden;
  margin-bottom: 48px;
  margin-top: 24px;

  display: flex;

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
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
  margin-bottom: 22px;

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
          <Number>{posts}</Number> posts
        </li>
        <li>
          <Number>{followers}</Number> followers
        </li>
        <li>
          <Number>{following}</Number> following
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

  margin-bottom: 4px;
`;

const Social = styled.div`
  flex: 2;
`;

const BioWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

function Bio({ text }) {
  const __html = text
    .trim()
    .split("\n")
    .map(line => safeHtml`<span>${line}</span>`)
    .join("<br />");

  return <BioWrapper dangerouslySetInnerHTML={{ __html }} />;
}

export default function Profile({
  bio,
  pictureSrc,
  username,
  fullname,
  followersData,
  children,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <Avatar src={pictureSrc} />
      <Social>
        <Username>{username}</Username>
        <Followers followersData={followersData} />
        <div>
          <Fullname>{fullname}</Fullname>
          {bio && <Bio text={bio} />}
        </div>
      </Social>
    </Wrapper>
  );
}

Profile.propTypes = {
  /**
   * User's bio.
   */
  bio: PropTypes.string,

  /**
   * Source of the profile picture,
   */
  pictureSrc: PropTypes.string,

  /**
   * Full name of the user.
   */
  fullname: PropTypes.string,

  /**
   * Username of the user.
   */
  username: PropTypes.string.isRequired,

  /**
   * Array consisting of three elements: number of user posts, followers and amount of profiles user follows.
   * [posts, followers, following], for example: [31, 3, 55]
   */
  followersData: PropTypes.array
};

Profile.defaultProps = {
  followersData: [0, 0, 0]
};
