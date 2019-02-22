import client from '@/services/config/client.js';

export default {
    getInformation(infoId) {
        return client.get(`/planets/${infoId}/`).then(response => {
            return response.data;
        });
    }
}