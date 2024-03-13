<template>
    <div>
        <div v-for="profile in profiles" :key="profile.id">
            <slot :item="profile"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompanyProfile",
    data() {
        return {
            profiles: [
                {
                    "id": 0,
                    "partner": true,
                    "name": "Trycore technologies",
                    "partner_time": "20-01-2014"
                },
                {
                    "id": 1,
                    "partner": false,
                    "name": "LandLine technologies",
                    "partner_time": null
                }
            ]
        }
    }
};
</script>


<style scoped></style>