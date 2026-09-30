export const validateTicket = (formData) => {
  const errors = {};

  // Title validation
  if (!formData.title || formData.title.trim() === "") {
    errors.title = "Title is required";
  } else if (formData.title.length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  // Description validation
  if (!formData.description || formData.description.trim() === "") {
    errors.description = "Description is required";
  } else if (formData.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  // Priority validation
  const validPriorities = ["Low", "Medium", "High"];
  if (!validPriorities.includes(formData.priority)) {
    errors.priority = "Invalid priority selected";
  }

  // Category validation
  const validCategories = ["General", "Technical", "Billing"];
  if (!validCategories.includes(formData.category)) {
    errors.category = "Invalid category selected";
  }

  return errors;
};