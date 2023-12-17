using Design.Entity;
using Infrastructure.ErrorHelper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.IServices
{
    public interface  ICreateAccount
    {
        public Task<ErrorHel> CreateAc(ListAcc listAccs);
        public List<ListAcc> getDataAll();
    }
}
