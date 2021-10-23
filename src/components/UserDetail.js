export default function UserDetail({
  img,
  name,
  description,
  followers,
  followings,
  public_repos,
  public_gists,
}) {
  return (
    <div>
      <img alt="img-perfil" src={img || "img_default.png"} />
      <h2>{name || "John Doe"}</h2>
      <p>{description}</p>
    </div>
  );
}
