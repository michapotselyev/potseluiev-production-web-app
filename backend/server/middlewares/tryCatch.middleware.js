import response from "./response.middleware";

export const tryCatch = (controller) => async (req, res, next) => {
    try {
        const result = await controller(req, res);

        if (result) {
            response(result.code, result.values, res);
        } else {
            response(200, { values: "Success" }, res);
        }
    } catch (error) {
        response(500, { error }, res);
        return next(error);
    }
};
