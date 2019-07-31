export function roundFollowers(followers) {
  if (followers >= 1000000) {
    return Math.round(followers / 100000) / 10 + "m";
  } else if (followers >= 10000) {
    return Math.round(followers / 100) / 10 + "k";
  } else {
    return followers.toString();
  }
}
