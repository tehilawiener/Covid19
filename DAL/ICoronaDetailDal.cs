using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface ICoronaDetailDal
    {
        public List<CoronaDetail> GetAllCoronaDetails();
        public Boolean AddCoronaDetails(CoronaDetail newCDetails);
        public Boolean AddVaccination(string ID, CoronaDetail vaccination);
        public CoronaDetail GetCoronaDetailsById(string id);
        public Boolean AddCovid19(string ID, CoronaDetail vaccination);
        public int Notvaccinated();
        public int ActivePatients();


    }
}
