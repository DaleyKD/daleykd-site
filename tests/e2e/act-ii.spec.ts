import { test, expect } from "@playwright/test";

test.describe("/career/act-ii", () => {
  test("Jump to nav scrolls to a top-level and a nested section", async ({ page }) => {
    await page.goto("/career/act-ii");
    const toc = page.getByRole("navigation", { name: "Jump to" });
    await expect(toc).toBeVisible();

    await toc.getByRole("link", { name: "Hanson", exact: true }).click();
    await expect(page).toHaveURL(/#hanson$/);
    await expect(page.getByRole("heading", { name: "Hanson", level: 2 })).toBeInViewport();

    await toc.getByRole("link", { name: "Becoming a Developer" }).click();
    await expect(page).toHaveURL(/#becoming-a-developer$/);
    await expect(page.getByRole("heading", { name: "Becoming a Developer", level: 3 })).toBeInViewport();
  });

  test("Meisel and GimmalSoft are linked sections, not coming soon", async ({ page }) => {
    await page.goto("/career/act-ii");
    const toc = page.getByRole("navigation", { name: "Jump to" });
    await expect(toc.getByText("coming soon")).toHaveCount(0);

    await toc.getByRole("link", { name: "Meisel", exact: true }).click();
    await expect(page).toHaveURL(/#meisel$/);
    await expect(page.getByRole("heading", { name: "Meisel", level: 2, exact: true })).toBeInViewport();

    await toc.getByRole("link", { name: "GimmalSoft", exact: true }).click();
    await expect(page).toHaveURL(/#gimmal$/);
  });
});
