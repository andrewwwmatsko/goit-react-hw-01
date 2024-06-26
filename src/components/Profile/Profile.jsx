import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={image} alt={`${name} avatar`} />
        <p className={css.profileUsername}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileListTitle}>Followers</span>
          <span className={css.profileListNumber}>{stats.followers}</span>
        </li>

        <li className={css.profileListItem}>
          <span className={css.profileListTitle}>Views</span>
          <span className={css.profileListNumber}>{stats.views}</span>
        </li>

        <li className={css.profileListItem}>
          <span className={css.profileListTitle}>Likes</span>
          <span className={css.profileListNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
