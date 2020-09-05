const rules = {
  visitor: {
    static: ["posts:list", "home-page:visit"],
  },
  writer: {
    static: [
      "posts:list",
      "posts:create",
      "users:get-self",
      "home-page:visit",
      "dashboard-page:visit",
      "products:visit"
    ],
    dynamic: {
      "post-edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
    },
  },
  admin: {
    static: [
      "posts:list",
      "posts:create",
      "posts:edit",
      "posts:delete",
      "products:list",
      "users:get",
      "users:get-self",
      "home-page:visit",
      "dashboard-page:visit",
      "products:visit"
    ],
  },
};

export default rules;