
export function resolveEnvTokens(data: Record<string, any>) {

    const resolved: Record<string, string> = {};

    for (const key in data) {

        let value = String(data[key] ?? '');

        if (value === '${ERP_USERNAME}') {
            value = process.env.ERP_USERNAME!;
        }

        if (value === '${ERP_PASSWORD}') {
            value = process.env.ERP_PASSWORD!;
        }

        resolved[key] = value;
    }

    return resolved;
}
