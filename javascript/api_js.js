function toggleFiles(event) {
    event.preventDefault();
    const filesList = document.getElementById('filesList');
    const arrow = document.getElementById('arrow');
    if (filesList.classList.contains('hidden')) {
        filesList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        filesList.classList.add('hidden');
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-right');
    }
}

function coreFiles(event){
    event.preventDefault();
    const coreList = document.getElementById('coreList');
    const arrow = document.getElementById('corearrow');
    if (coreList.classList.contains('hidden')) {
        coreList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        coreList.classList.add('hidden');
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-right');
    }
}

function abstractcontrollerFiles(event)
{
    event.preventDefault();
    const abstractcontrollerList = document.getElementById('abstractcontrollerList');
    const arrow = document.getElementById('abstractcontrollerarrow');
    if (abstractcontrollerList.classList.contains('hidden')) {
        abstractcontrollerList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
    abstractcontrollerList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('searchInput');
//     const sidebarItems = document.querySelectorAll('.sidebar ul ul');

//     searchInput.addEventListener('input', function() {
//         const filter = searchInput.value.toLowerCase();
//         sidebarItems.forEach(item => {
//             if (item.textContent.toLowerCase().startsWith(filter)) {
//                 item.style.display = '';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     });

//     const sidebar = document.getElementById('sidebar');
//     const sidebarHeight = sidebar.offsetHeight;
//     const containerHeight = sidebar.parentElement.offsetHeight;

//     window.addEventListener('scroll', function() {
//         if (window.scrollY + window.innerHeight >= containerHeight) {
//             sidebar.style.position = 'absolute';
//             sidebar.style.bottom = '0';
//         } else {
//             sidebar.style.position = 'sticky';
//             sidebar.style.bottom = 'auto';
//         }
//     });
// });

function actioncableFiles(event)
{
    event.preventDefault();
    const actioncableList = document.getElementById('actioncableList');
    const arrow = document.getElementById('actioncablearrow');
    if (actioncableList.classList.contains('hidden')) {
        actioncableList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
    actioncableList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actioncontrollerFiles(event)
{
    event.preventDefault();
    const aactioncontrollerList = document.getElementById('actioncontrollerList');
    const arrow = document.getElementById('actioncontrollerarrow');
    if (actioncontrollerList.classList.contains('hidden')) {
        actioncontrollerList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actioncontrollerList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actiondispatchFiles(event)
{
    event.preventDefault();
    const actiondispatchList = document.getElementById('actiondispatchList');
    const arrow = document.getElementById('actiondispatcharrow');
    if (actiondispatchList.classList.contains('hidden')) {
        actiondispatchList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actiondispatchList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actionmailboxFiles(event)
{
    event.preventDefault();
    const actionmailboxList = document.getElementById('actionmailboxList');
    const arrow = document.getElementById('actionmailboxarrow');
    if (actionmailboxList.classList.contains('hidden')) {
        actionmailboxList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actionmailboxList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actionmailerFiles(event)
{
    event.preventDefault();
    const actionmailerList = document.getElementById('actionmailerList');
    const arrow = document.getElementById('actionmailerarrow');
    if (actionmailerList.classList.contains('hidden')) {
        actionmailerList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actionmailerList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actiontextFiles(event)
{
    event.preventDefault();
    const actiontextList = document.getElementById('actiontextList');
    const arrow = document.getElementById('actiontextarrow');
    if (actiontextList.classList.contains('hidden')) {
        actiontextList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actiontextList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function actionviewFiles(event)
{
    event.preventDefault();
    const actionviewList = document.getElementById('actionviewList');
    const arrow = document.getElementById('actionviewarrow');
    if (actionviewList.classList.contains('hidden')) {
        actionviewList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        actionviewList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function activejobFiles(event)
{
    event.preventDefault();
    const activejobList = document.getElementById('activejobList');
    const arrow = document.getElementById('activejobarrow');
    if (activejobList.classList.contains('hidden')) {
        activejobList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        activejobList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function activemodelFiles(event)
{
    event.preventDefault();
    const activemodelList = document.getElementById('activemodelList');
    const arrow = document.getElementById('activemodelarrow');
    if (activemodelList.classList.contains('hidden')) {
        activemodelList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        activemodelList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function activerecordFiles(event)
{
    event.preventDefault();
    const activerecordList = document.getElementById('activerecordList');
    const arrow = document.getElementById('activerecordarrow');
    if (activerecordList.classList.contains('hidden')) {
        activerecordList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        activerecordList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function activestorageFiles(event)
{
    event.preventDefault();
    const activestorageList = document.getElementById('activestorageList');
    const arrow = document.getElementById('activestoragearrow');
    if (activestorageList.classList.contains('hidden')) {
        activestorageList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        activestorageList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function activesupportFiles(event)
{
    event.preventDefault();
    const activesupportList = document.getElementById('activesupportList');
    const arrow = document.getElementById('activesupportarrow');
    if (activesupportList.classList.contains('hidden')) {
        activesupportList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        activesupportList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function mailFiles(event)
{
    event.preventDefault();
    const mailList = document.getElementById('mailList');
    const arrow = document.getElementById('mailarrow');
    if (mailList.classList.contains('hidden')) {
        mailList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        mailList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function mimeFiles(event)
{
    event.preventDefault();
    const mimeList = document.getElementById('mimeList');
    const arrow = document.getElementById('mimearrow');
    if (mimeList.classList.contains('hidden')) {
        mimeList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        mimeList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function minitestFiles(event)
{
    event.preventDefault();
    const minitestList = document.getElementById('minitestList');
    const arrow = document.getElementById('minitestarrow');
    if (minitestList.classList.contains('hidden')) {
        minitestList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        minitestList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

function railsFiles(event)
{
    event.preventDefault();
    const railsList = document.getElementById('railsList');
    const arrow = document.getElementById('railsarrow');
    if (railsList.classList.contains('hidden')) {
        railsList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        railsList.classList.add('hidden');
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    }
}

