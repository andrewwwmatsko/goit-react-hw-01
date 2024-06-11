import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendInfo}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.statusOnline}>Online</p>
      ) : (
        <p className={css.statusOffline}>Offline</p>
      )}
    </div>
  );
}
