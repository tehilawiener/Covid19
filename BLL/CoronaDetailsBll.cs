using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;

namespace BLL
{
    public class CoronaDetailsBll:ICoronaDetailsBll
    {
        DAL.ICoronaDetailDal dal;

        public CoronaDetailsBll(ICoronaDetailDal dal)
        {
            this.dal = dal;
        }

        public List<CoronaDetail>GetAllCoronaDetails()=>dal.GetAllCoronaDetails();
        public Boolean AddCoronaDetails(CoronaDetail coronaDetail) => dal.AddCoronaDetails(coronaDetail);
        public Boolean AddVaccination(string ID, CoronaDetail vaccination)=>dal.AddVaccination(ID, vaccination);
        public CoronaDetail GetCoronaDetailsById(string id) => dal.GetCoronaDetailsById(id);
        public Boolean AddCovid19(string ID, CoronaDetail vaccination) => dal.AddCovid19(ID, vaccination);

        public int Notvaccinated()=>dal.Notvaccinated();
        public int ActivePatients()=>dal.ActivePatients();
    }
}
