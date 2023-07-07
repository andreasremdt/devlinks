export default function ProfilePage() {
  return (
    <>
      <header>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
      </header>

      <form>
        <fieldset>
          <label htmlFor="profile-picture">Profile picture</label>
          <input type="file" id="profile-picture" name="profile-picture" />
          <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </fieldset>

        <fieldset>
          <label htmlFor="first-name">First name*</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="e.g. John"
            required
          />

          <label htmlFor="last-name">Last name*</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="e.g. Appleseed"
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. email@example.com"
            required
          />
        </fieldset>

        <button type="submit">Save</button>
      </form>
    </>
  );
}
