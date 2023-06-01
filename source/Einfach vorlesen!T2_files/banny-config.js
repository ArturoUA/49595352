var banny = {
    app : '#app',
    blocker: true,
    closer: true,
    position: 'center',
    groups: {
        statistics: [
            'matomo',
        ],
        media: [
            'youtube',
            'messenger'
        ],
    },
    assets: {
        matomo: [
            `var _paq = _paq || [];_paq.push(['setDomains', ['*.www.einfachvorlesen.de']]);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function () {var u = '//www.stiftunglesen.de/piwik/';    _paq.push(['setTrackerUrl', u + 'piwik.php']);_paq.push(['setSiteId', 10]);var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g, s);})();`,
        ],
    },
    vendors: ['youtube', 'matomo', 'messenger'],
    iframe: ['youtube', 'messenger'],
    text: {
        de: {
            statistics: {
                title: 'Statistiken',
            },
            media: {
                title: 'Medien',
            },
            matomo: {
                title:  'Matomo',
                desc: 'Open Source Webanalysedienst Matomo. Die Speicherung von Matomo-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.',
                url: 'https://matomo.org/privacy-policy/',
                link: 'Zur Datenschutzerklärung von Matomo',
            },
            messenger: {
                title: 'MessengerPeople',
                desc: 'Diese Website bindet Inhalte von MessengerPeople an. Der Betreiber speichert Informationen über die Besucher und kann Daten an Partner weitergeben.',
                url: 'https://www.messengerpeople.com/privacy/',
                link: 'Zur Datenschutzerklärung von MessengerPeople',
            },
        }
    },
    class: {
        title: 'h4',
    }
}